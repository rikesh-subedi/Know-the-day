var request = require('request'),
    cheerio = require('cheerio'),
    async = require('async'),
    fs = require('fs');
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
]

    function scrap(body) {
        var ids = [];
        var result = {};
        var $ = cheerio.load(body);
        var callback = function(index, li) {
            var href = $(li).find('a').attr('href');
            var text = $(li).find('.toctext').text();
            //console.log(href);
            ids.push(text);
        }
        $('ul>li.toclevel-1').each(callback);

        for (i in ids) {
            result[ids[i]] = {};
            result[ids[i]].values = [];
            var lis = $('h2:contains("' + ids[i] + '") + ul li');
            lis.each(function() {
                var val_obj = {};
                val_obj.text = this.text();
                val_obj.href = this.find('a').attr('href');
                result[ids[i]].values.push(val_obj)
                //console.log(this.text());
            })
        }
        return result;
    }
    function capitalize(string){
        return string.charAt(0)+string.slice(1);
    }
exports.fetchSingleFile = function(req, res) {
    var url = 'http://en.wikipedia.org/wiki/';
    var month = String(req.params.month).toLowerCase();
    var day = parseInt(req.params.day,10);
    var day_in_month = new Date(2012, months.indexOf(month) + 1, 0).getDate();
    if (day < 1 && day > day_in_month) {
        res.send('Invalid Date')
    } else {
        var url_month_day = url + capitalize(month) + '_' + day;
        var extension = '.json';
        var req_callback = function(error, response, body) {
            console.log(url_month_day);
            if (error) {
                request(url_month_day, function(e, r, b) {
                    if (e) {
                        console.log('error again');
                    }
                    if (!e && r.statusCode == 200) {
                        console.log('done in second attempt');
                        var result = scrap(b);
                        res.json(result);
                        fs.writeFile('out/' + month_day + extension, JSON.stringify(result), function(err) {
                            if (err) throw err;
                            console.log('The "data to append" was appended to file!');
                        });


                    }
                })

                //next();
            }

            if (!error && response.statusCode == 200) {
                console.log(url_month_day);
                var result = scrap(body);
                res.json(result);
                fs.writeFile('out/' + month+'_'+day + extension, JSON.stringify(result), function(err) {
                    if (err) throw err;
                    console.log('The "data to append" was appended to file!');
                });



            }
            return JSON.stringify(result);

        }
        request(url_month_day, req_callback);

    }

}