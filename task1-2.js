import CSVToJson from "csvtojson";
import FileSystem from "fs";

CSVToJson().fromFile('csv/node_mentoring_t1_2_input_example.csv').then(source => {
    console.log(source);
    FileSystem.writeFileSync("./result.json", JSON.stringify(source));
});