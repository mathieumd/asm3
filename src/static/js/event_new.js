/*global $, jQuery, _, additional, asm, common, html */

$(function() {

    "use strict";

    const event_new = {

        render: function(){
            return [
                '<div id="dialog-similar" style="display: none" title="' + html.title(_("Similar Event")) + '">',
                '<p><span class="ui-icon ui-icon-alert"></span>',
                _("This event is very similar to another event on file, carry on creating this record?"),
                '<br /><br />',
                '<span class="similar-event"></span>',
                '</p>',
                '</div>',
                html.content_header(_("Add a new event")),
                '<table class="asm-table-layout">',
                '<tr>',
                '<td><label for="eventname">' + _("Event Name") + '</label></td>',
                '<td><input class="asm-textbox newform" maxlength="50" id="eventname" data="eventname" type="text" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="startdate">' + _("Start Date") + '</label>',
                '<span class="asm-has-validation">*</span>',
                '</td>',
                '<td><input id="startdate" data="startdate" class="asm-textbox asm-datebox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="enddate">' + _("End Date") + '</label>',
                '<span class="asm-has-validation">*</span>',
                '</td>',
                '<td><input id="enddate" data="enddate" class="asm-textbox asm-datebox" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="location">' + _("Location") + '</label>',
                '<span class="asm-has-validation">*</span>',
                '</td>',
                '<td><input type="hidden" id="location" class="asm-personchooser" />',
                '</td>',
                '</tr>',
                '<tr>',
                '<td><label for="address">' + _("Address") +'</label></td>',
                '<td><textarea class="asm-textareafixed newform" id="address" data="address" rows="3"></textarea></td>',
                '</tr>',
                '<tr>',
                '<td><label for="town">' + _("City") + '</label></td>',
                '<td><input class="asm-textbox newform" maxlength="100" id="town" data="town" type="text" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="county">' + _("State") + '</label></td>',
                '<td><input class="asm-textbox newform" maxlength="100" id="county" data="county" type="text" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="postcode">' + _("Zipcode") + '</label></td>',
                '<td><input class="asm-textbox newform" id="postcode" data="postcode" type="text" /></td>',
                '</tr>',
                '<tr>',
                '<td><label for="country">' + _("Country") + '</label></td>',
                '<td><input class="asm-textbox newform" id="country" data="country" type="text" /></td>',
                '</tr>',
                additional.additional_new_fields(controller.additional),
                '</table>',
                '<p></p>',
                '<div class="centered">',
                '<button id="addedit">' + _("Create and edit") + '</button>',
                '<button id="add">' + _("Create") + '</button>',
                '<button id="reset">' + _("Reset") + '</button>',
                '</div>',
                html.content_footer()
            ].join("\n");
        },

        bind: function(){
            $("#reset").button().click(function(){
                event_new.reset();
            });
            $("[data='ownertype']").val(2);
            $("#ui-id-4").text("Find organization");
            $("#ui-id-6").text("Add organization");
            $("#location").personchooser().bind("personchooserchange", function(event, rec){
                $("#address").val(html.decode(rec.OWNERADDRESS));
                $("#town").val(html.decode(rec.OWNERTOWN));
                $("#county").val(html.decode(rec.OWNERCOUNTY));
                $("#postcode").val(html.decode(rec.OWNERPOSTCODE));
                $("#country").val(html.decode(rec.OWNERCOUNTRY));
            });
        },

        reset: function(){

            $(".asm-textbox").val("").change();
            $("#address").val("").change();
        },

        name: "event_new",
        animation: "newdata",
        autofocus: "#eventtype",
        title: function() { return _("Add a new event"); },
        routes: {
            "event_new": function() { common.module_loadandstart("event_new", "event_new"); }
        }
    };
    common.module_register(event_new);
});
