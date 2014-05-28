var fileSystem = require('fs');
var singleFileScrap = require('./get_single_file');
var months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];
exports.getData = function(req, res) {
    var month = String(req.params.month).toLowerCase();
    var day = parseInt(req.params.day,10);
    var day_in_month = new Date(2012, months.indexOf(month) + 1, 0).getDate();
    if (day < 1 || day > day_in_month) {
        res.send('Invalid Date');
    } else {

        var month_day = month + '_' + day;
        var file_path = 'out/' + month_day + '.json';
        var exists = fileSystem.existsSync(file_path);
        if (!exists) {
            //scrap and create the file
            //
            console.log('file does not exist');
            
            singleFileScrap.fetchSingleFile(req, res);
            res.setHeader("Content-Type", "application/json");
            //res.send('loading');


        } else {
            var stat = fileSystem.statSync(file_path);
            res.writeHead(200, {

                'Content-Type': 'application/json',
                'Content-Length': stat.size
            });
            var readStream = fileSystem.createReadStream(file_path);
            readStream.pipe(res);
        }
    }



}