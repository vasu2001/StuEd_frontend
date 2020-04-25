import PushNotification from 'react-native-push-notification';
import moment from 'moment';

export default class NotificationService {
  //onNotificaitn is a function passed in that is to be called when a
  //notification is to be emitted.
  constructor() {
    this.configure();
    this.lastId = 0;
  }

  configure() {
    PushNotification.configure({
      //onNotification: onNotification,
      onNotification: () => {},

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,
    });
  }

  //Appears right away
  //notify on slot booked
  localNotification(topic, OTP) {
    this.lastId++;
    PushNotification.localNotification({
      title: 'Slot Booked',
      message: `Your slot for ${topic} was successfully booked. OTP- ${OTP}`,
      playSound: false,
      soundName: 'default',
    });
  }

  //Appears after a specified time. App does not have to be open.
  //schedule slot notify
  scheduleNotification(slotTime, topic) {
    this.lastId++;
    PushNotification.localNotificationSchedule({
      date: new Date(moment(slotTime).subtract(1, 'hours')), //1 hour before slotTime
      title: 'Upcoming Slot',
      message: `You have an upcoming slot for ${topic} within 1 hour. Don't forget to miss it`,
      playSound: true,
      soundName: 'default',
    });
  }

  checkPermission(cbk) {
    return PushNotification.checkPermissions(cbk);
  }

  cancelNotif() {
    PushNotification.cancelLocalNotifications({id: '' + this.lastId});
  }

  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }
}
