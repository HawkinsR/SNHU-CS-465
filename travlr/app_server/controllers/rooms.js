var fs = require('fs');
var roomtypes = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const rooms = (req, res) => {
    res.render('rooms', { title: 'Rooms', roomtypes });
};

module.exports = {
    rooms
};
