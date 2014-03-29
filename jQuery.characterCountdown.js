/*
* File: jQuery.characterCountdown.js
* Author: Engin KARTAL
* Copyright: 2006 Simon Jarvis
* Date: 08/11/06
* Link: http://www.enginkartal.com.tr/projects/jquery/characterCountdown
*
* GNU General Public License for more details:
* MIT-LICENSE.txt
*
*/
(function ($) {

    $.fn.characterCountdown = function (settings) {

        var defaultSetting = {
            text: 'Remainin:g'
        };

        var obj = $.extend(defaultSetting, settings);

        var idCount = 0;


        return this.each(function () {

            var o = $(this);

            idCount++;

            var remaining = 0;


            var labelID = '_idCountInfo' + idCount + '';

            var txtCountInfo = '<br/><span id="' + labelID + '"></span><br/>';

            o.after(txtCountInfo);

            o.on('keyup keypress blur change', function () {

                countProcess();

            });

            function countProcess() {

                var txtMaxLength = obj.maxLength;

                var txtLenght = o.val().length;

                if (txtMaxLength >= txtLenght)
                    remaining = txtMaxLength - txtLenght;
                else
                    textSubString(txtMaxLength);

                countInfo(obj.text + remaining);

            }

            function textSubString(txtMaxLength) {

                o.val(o.val().substring(0, txtMaxLength));
            }

            function countInfo(label) {

                $('#' + labelID).text(label);

            }

        });


    }


})(jQuery);