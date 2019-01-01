var obj = {
    fn:function (req,res) {
        res.write('hello nodejs');
        res.write('你g好');
        res.end()
    }
};

module.exports = obj;
