const sql = require('mssql');
const _ = require('lodash');


const config = {
  user: 'sa',
  password: '',
  server: 'localhost',
  database: 'PSG_Data_SQL'
};

function setup() {
  return new Promise(function (resolver, reject) {
    console.log("Creating the connection");
    try {
      sql.close();
    } catch (e) {
      console.log(e);
    }
    sql.connect(config, function (err) {
      if (err) {
        console.log("We have error connecting to sql server ..............................");
        console.log(err);
      } else {
        console.log("Connection pool created");
      }
      resolver(null);
    });
  });
}

function getCase(id) {
  return new Promise(function (resolver, reject) {
    console.log("Getting Case");
    if (1 == 1) {
      console.log("Just returning the ID");
      resolver({
        "id": id
      });
    }

    var request = new sql.Request();
    request.query(`SELECT [InvoiceNumber] as id, 
                  [HouseNumber] + ' ' + [Street] + ' ' + [Area] + ' ' + [Town] + ' ' + [PostCode] as address 
                  FROM [AddressFile] 
                  WHERE InvoiceNumber = ` + id,

      function (err, r) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolver(r.recordset[0]);
        }
      });

  });
}

function getAddress(caseId) {
  return new Promise(function (resolver, reject) {
    console.log("Getting Case");

    var request = new sql.Request();
    request.query(`SELECT [InvoiceNumber] as id, 
                  [HouseNumber] + ' ' + [Street] + ' ' + [Area] + ' ' + [Town] + ' ' + [PostCode] as formattedAddress,
                  HouseNumber as buildingNumber,
                  Street as thoroughfare,
                  Area as dependentLocality,
                  Town as postTown,
                  PostCode as postCode
                  FROM [AddressFile] 
                  WHERE InvoiceNumber = ` + caseId,

      function (err, r) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolver(r.recordset[0]);
        }
      });

  });
}

function getCaseList(listSize, town) {
  return new Promise(function (resolver, reject) {
    console.log("Getting Case List: " + listSize + ", " + town);

    var request = new sql.Request();
    if (undefined != town) {
      request.query(`SELECT TOP ` + listSize + ` [InvoiceNumber] as id FROM [AddressFile]  
      WHERE town like '%` + town + `%' 
      order by OrderDate desc`,

        function (err, r) {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolver(r.recordset);
          }
        });

    } else {
      request.query(`SELECT TOP ` + listSize + ` [InvoiceNumber] as id FROM [AddressFile]  
                  order by OrderDate desc`,

        function (err, r) {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolver(r.recordset);
          }
        });
    }
  });
}



function getOrderLines(caseids) {
  console.log("Getting orderlines with: " + caseids);
  return new Promise(function (resolver, reject) {

    var request = new sql.Request();
    let sqlStr = `SELECT [InvoiceDetailID] as id, InvoiceID as caseid, [ProductName] as productName
    FROM [PSG_Data_SQL].[dbo].[InvoiceDetails]
    WHERE InvoiceID in (` + caseids + ")";

    console.log(sqlStr);

    request.query(sqlStr,
      function (err, r) {
        if (err) {
          reject(err);
        } else {
          let data = _.groupBy(r.recordset, "caseid");
          let retObj = new Array();
          caseids.map(caseid => {
            orderLines = data[caseid];
            if (orderLines) {
              retObj.push(orderLines);
            } else {
              retObj.push([])
            }
          })
          resolver(retObj);
        }
      });
  });
}

function cleanUp() {
  console.log("clean up ...........................");
  sql.close();
}

exports.getCase = getCase;
exports.getCaseList = getCaseList;
exports.getOrderLines = getOrderLines;
exports.getAddress = getAddress;
exports.setup = setup;
exports.cleanUp = cleanUp;