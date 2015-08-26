/*global OER, Backbone, JST*/

OER.Views = OER.Views || {};

(function () {
    'use strict';

    OER.Views.RLOBaseView = Backbone.View.extend({

        template: JST['app/scripts/templates/RLOBaseView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();