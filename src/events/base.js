import EventEmitter from 'asyncly/EventEmitter2';
import _ from 'lodash';
import $ from 'jquery';

export default class BaseEvents extends EventEmitter {
    /**
     *
     * @param {string} eventName
     * @param {object} data
     * @param {object} el
     * @returns {*}
     */
    emit(eventName, data, el) {
        return super.emit(eventName, data, el);
    }

    /**
     *
     * @param {string} eventName
     * @param {function} callback
     * @returns {*}
     */
    on(eventName, callback) {
        return super.on(eventName, callback);
    }

    /**
     *
     * @param {string} eventName
     * @param {function} callback
     * @returns {*}
     */
    off(eventName, callback) {
        return super.off(eventName, callback);
    }

    /**
     * Attaches emitter to required data-tags located in the document
     */
    emitterInit() {
        _.forIn(this.dataMap, (eventDesc, eventTag) => {
            let ele = document.querySelector(eventTag);
            if (ele) {
                $('body').on(eventDesc.trigger.join(' '), eventTag, (event) => {
                    ele = document.querySelector(eventTag);
                    this.emit(eventDesc.eventName, event, ele);
                });
            }
        });
    }
}
