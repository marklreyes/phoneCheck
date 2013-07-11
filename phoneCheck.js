/**************************************************************************************************************
* PHONECHECK Object
* By: mr@marklreyes.com
* Date: 20130711
*
* DESCRIPTION:	
* Based off of, http://www.smartwebby.com/DHTML/phone_no_validation.asp - it honors the logic as documented by smartwebby, but namespaced into a single global object, phoneCheck.
*
* RECOMMENDATION:	
* The onSubmit is recommended to be external rather than inline.
*
* PREREQUISITE:	
*	 <form name="frmSample" method="post" action="#" onSubmit="return phoneCheck.validateNumbers()">
*        <p>Enter a phone number : <input type="text" name="txtPhone"></p>
*        <p><input type="submit" name="Submit" value="Submit"></p>
*    </form>
*
* VALIDATIONS (errors currently print out in the JS console per lines 87 and 92):	
* 	Valid Phone numbers: 0044-1293-451996
*	Invalid Phone numbers: 0044-1293
*	
***************************************************************************************************************/
var phoneCheck = {

    isInteger: function (s) {
        var i;
        for (i = 0; i < s.length; i++) {
            // Check that current character is number.
            var c = s.charAt(i);
            if (((c < "0") || (c > "9"))) return false;
        }
        // All characters are numbers.
        return true;
    },

    trim: function (s) {
        var i;
        var returnString = "";
        // Search through string's characters one by one.
        // If character is not a whitespace, append to returnString.
        for (i = 0; i < s.length; i++) {
            // Check that current character isn't whitespace.
            var c = s.charAt(i);
            if (c != " ") returnString += c;
        }
        return returnString;
    },

    stripCharsInBag: function (s, bag) {
        var i;
        var returnString = "";
        // Search through string's characters one by one.
        // If character is not in bag, append to returnString.
        for (i = 0; i < s.length; i++) {
            // Check that current character isn't whitespace.
            var c = s.charAt(i);
            if (bag.indexOf(c) == -1) returnString += c;
        }
        return returnString;
    },

    checkInternationalPhone: function (strPhone) {
        // Non-digit characters which are allowed in phone numbers.
        var phoneNumberDelimiters = "()- ";
        // Characters which are allowed in international phone numbers.
        // (a leading + is OK)
        var validWorldPhoneChars = phoneNumberDelimiters + "+";
        // Minimum no of digits in an international phone no.
        var minDigitsInIPhoneNumber = 10;

        var bracket = 3;
        strPhone = phoneCheck.trim(strPhone);
        if (strPhone.indexOf("+") > 1) return false;
        if (strPhone.indexOf("-") != -1) bracket = bracket + 1;
        if (strPhone.indexOf("(") != -1 && strPhone.indexOf("(") > bracket) return false;
        var brchr = strPhone.indexOf("(");
        if (strPhone.indexOf("(") != -1 && strPhone.charAt(brchr + 2) != ")") return false;
        if (strPhone.indexOf("(") == -1 && strPhone.indexOf(")") != -1) return false;
        s = phoneCheck.stripCharsInBag(strPhone, validWorldPhoneChars);
        return (phoneCheck.isInteger(s) && s.length >= minDigitsInIPhoneNumber);
    },

    validateNumbers: function () {
        var phone = document.frmSample.txtPhone;

        if ((phone.value === null) || (phone.value === "")) {
            console.log('Please Enter your Phone Number');
            phone.focus();
            return false;
        }
        if (phoneCheck.checkInternationalPhone(phone.value) === false) {
            console.log('Please Enter a Valid Phone Number');
            phone.value = "";
            phone.focus();
            return false;
        }
        return true;
    }

};