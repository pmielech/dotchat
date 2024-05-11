

export default class Message {
  constructor(user, msg, timestamp, formatted_time) {
    this.user = user;
    this.msg = msg;
    this.timestamp = timestamp;
    this.formattedTime = formatted_time;
  }
}
