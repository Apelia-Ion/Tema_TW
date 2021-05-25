
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");
const fs = require("fs");
const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

// CREATE (<=>POST)
app.post("/Obiecte", (req, res) => {
  const ObiecteList = readJSONFile();
  let newObiect = {
      id: uuid.v4.apply(),
      name: req.body.name,
      artist: req.body.artist,
      year: req.body.year,
      sPrice: req.body.sPrice,
      img:req.body.img
  }
  ObiecteList.push(newObiect)
  writeJSONFile(ObiecteList)
  res.status(200).send(newObiect);
});


// READ ALL (<=> GET)
app.get("/Obiecte", (req, res) => {
  const ObiecteList = readJSONFile();
  if(ObiecteList != undefined && ObiecteList.length != 0)
        {res.status(200).send(ObiecteList);}
   else
   {res.status(404).send("No object found!")} 
});


// Delete
app.delete("/Obiecte/:id", (req, res) => {
  const ObiecteList = readJSONFile();
  let id=req.params.id;
  let existaObiect=false;
  for(let i=0;i<ObiecteList.length; i++)
  {
    if(ObiecteList[i].id===id)
    {
      existaObiect=true;
      ObiecteList.splice(i,1);
      break;
    }
  }
});

// citire din db.json
function readJSONFile() {
  return JSON.parse(fs.readFileSync("db.json"))["Obiecte"];
}

//scriere in  db.json
function writeJSONFile(content) {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ Obiecte: content }, null, 4),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

//server
app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);