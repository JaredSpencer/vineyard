import Rooms from '../models/rooms';
import db from '../config';

function createRoom(inputRoom) {
  return new Rooms({ 
    room_name: inputRoom.room_name 
  }).save().then(room => {
    return new Rooms({id: room.id})
      .users().attach(inputRoom.users)
      .then(() => room);
  });
}

function getMostRecent(userId) {
  return new Rooms().query(q => {
    q.select('rooms.id', 'rooms.room_name', db.knex.raw('MAX(messages.created_at) as newest'))
      .innerJoin('rooms_users', function() {
        this.on('rooms.id', '=', 'rooms_users.room_id')
          .andOn('rooms_users.user_id', '=', userId);
      })
      .leftOuterJoin('messages', function() {
        this.on('rooms.id', '=', 'messages.room_id');
      })
      .groupBy('rooms.id', 'rooms.room_name')
      .orderByRaw('newest desc nulls last');
  }).fetchAll({})
}

function getRoomById(id) {
  return new Rooms({ id: id }).fetch();
}

function addUserToRoom(userId, roomId) {
  return new Rooms({ id: roomId })
    .users().attach(userId);
}

function getUsersInRoom(roomId) {
  return new Rooms({ id: roomId })
    .users().fetch()
}

export default { addUserToRoom, createRoom, getMostRecent, getRoomById, getUsersInRoom };
