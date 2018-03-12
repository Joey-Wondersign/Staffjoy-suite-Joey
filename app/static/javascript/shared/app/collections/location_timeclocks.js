(function(root) {

    "use strict";

    var Models = root.App.Models,
        Collections = root.App.Collections,
        LocationTimeclocks = Collections.Base.extend({
            model: Models.Base,
            endpoint: function() {
                var self = this,
                    locationId = self.getUpstreamModelId("locationId")
                ;

                return "locations/" + locationId + "/timeclocks/" + self.getParams();
            },
            parse: function(response) {
                return response.data;
            }
        })
    ;

    root.App.Collections.LocationTimeclocks = LocationTimeclocks;
})(this);
