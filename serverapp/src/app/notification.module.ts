import { NgModule } from '@angular/core';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

const customNotificationOptions: NotifierOptions = {
  position: {

    horizontal: {

      /**
       * Defines the horizontal position on the screen
       * @type {'left' | 'middle' | 'right'}
       */
      position: 'left',

      /**
       * Defines the horizontal distance to the screen edge (in px)
       * @type {number}
       */
      distance: 12

    },

    vertical: {

      /**
       * Defines the vertical position on the screen
       * @type {'top' | 'bottom'}
       */
      position: 'bottom',

      /**
       * Defines the vertical distance to the screen edge (in px)
       * @type {number}
       */
      distance: 12,

      /**
       * Defines the vertical gap, existing between multiple notifications (in px)
       * @type {number}
       */
      gap: 10

    }

  },
  /**
   * Defines the notification theme, responsible for the Visual Design of notifications
   * @type {string}
  */
  theme: 'material',
  behaviour: {

    /**
     * Defines whether each notification will hide itself automatically after a timeout passes
     * @type {number | false}
     */
    autoHide: 5000,
  
    /**
     * Defines what happens when someone clicks on a notification
     * @type {'hide' | false}
     */
    onClick: false,
  
    /**
     * Defines what happens when someone hovers over a notification
     * @type {'pauseAutoHide' | 'resetAutoHide' | false}
     */
    onMouseover: 'pauseAutoHide',
  
    /**
     * Defines whether the dismiss button is visible or not
     * @type {boolean}
     */
    showDismissButton: true,
  
    /**
     * Defines whether multiple notification will be stacked, and how high the stack limit is
     * @type {number | false}
     */
    stacking: 4
  
  }
}

@NgModule({
  imports: [NotifierModule.withConfig(customNotificationOptions)],
  exports: [NotifierModule],
})
export class NotificationModule { }
