 
/*var reddits = [ 'programming', 'javascript', 'node' ]
  , concurrency = 2;

async.eachLimit(reddits, concurrency, function (reddit, next) {
    var url = format('http://reddit.com/r/%s', reddit);
    request(url, function (err, response, body) {
        if (err) throw err;
        var $ = cheerio.load(body);
        $('a.title').each(function () {
            console.log('%s (%s)', $(this).text(), $(this).attr('href'));
        });
        next();
    });
});*/
 var request = require('request'),
    cheerio = require('cheerio'),
    async = require('async'),
    format = require('util').format;
var fs = require('fs');
 var url = 'http://en.wikipedia.org/wiki/';
    var ids = [];
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
     var all_urls = [];
     months.map(function(month, index){
        var daysInMonth = new Date(2012, index + 1, 0).getDate();
        for(i=1;i<=daysInMonth;i++){
            var url = month+'_'+i;
            all_urls.push(url);
        }
    })
    var data = [];
    /*var async_each_callback1 = function(month, next) {
        var month_id = month;
        var extension = '.json';
        var file_location = 'out/' + month_id + extension;
        var daysInMonth = new Date(2012, months.indexOf(month) + 1, 0).getDate();

        for (m = 1; m <= daysInMonth; m++) {
            var url_month_day = url + month + '_' + m;
            var req_callback = function(error, response, body) {
                if (error) {
                    console.log(error);
                    console.log(this.url);
                    //next();
                }
                var result = {};
                if (!error && response.statusCode == 200) {
                    //console.log(body);
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
                        //console.log(ids[i]);
                        var lis = $('h2:contains("' + ids[i] + '") + ul li');
                        lis.each(function() {
                            var val_obj = {};
                            val_obj.text = this.text();
                            val_obj.href = this.find('a').attr('href');
                            result[ids[i]].values.push(val_obj)
                            //console.log(this.text());
                        })
                    }
                    //res.writeHead(200, {'Content-Type': 'application/json', 'Content-Length': body.length});

                    //console.log(JSON.stringify(result))


                }
                data.push(result);
                fs.appendFile('out/'+month+extension, '\n STARTSTART' +JSON.stringify(result) +'ENDEND\n', function(err) {
                    if (err) throw err;
                    console.log('The "data to append" was appended to file!');
                });
            }
            request(url_month_day, req_callback);


        }
        next();
    };*/
    function scrap(body){
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
            //console.log(ids[i]);
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
    var async_each_callback = function(day, next) {
        var extension = '.json';
        var file_location = 'out/' + day + extension;
        var url_month_day = url + day;
        var req_callback = function(error, response, body) {
            if (error) {
                console.log(url_month_day);
                request(url_month_day,function(e,r,b){
                    if(e){
                        console.log('error again');
                    }
                    if (!e && r.statusCode == 200) {
                        console.log('done in second attempt');
                        var result = scrap(b);
                        fs.writeFile('out/' + day + extension, JSON.stringify(result), function(err) {
                            if (err) throw err;
                            console.log('The "data to append" was appended to file!');
                        });
                    }
                })
                
                //next();
            }
            
            if (!error && response.statusCode == 200) {
                var result = scrap(body);                
                fs.writeFile('out/' + day + extension, JSON.stringify(result), function(err) {
                    if (err) throw err;
                    console.log('The "data to append" was appended to file!');
                });


            }
            
        }
        request(url_month_day, req_callback);
        next();
    };
    var async_final_callback = function(error) {
        console.log()
        res.json(data);
    }
    //async.forEachLimit(months, 5, async_each_callback, async_final_callback);
    async.forEachLimit(all_urls,5, async_each_callback, async_final_callback);



    console.log(ids.length);
    // res.end();