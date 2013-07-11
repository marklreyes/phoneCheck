PHONECHECK Object
By: mr@marklreyes.com
Date: 20130711

DESCRIPTION:	
Based off of, http://www.smartwebby.com/DHTML/phone_no_validation.asp - it honors the logic as documented by smartwebby, but namespaced into a single global object, phoneCheck.

RECOMMENDATION:	
The onSubmit is recommended to be external rather than inline.

PREREQUISITE:	
	<form name="frmSample" method="post" action="#" onSubmit="return phoneCheck.validateNumbers()">
		<p>Enter a phone number : <input type="text" name="txtPhone"></p>
		<p><input type="submit" name="Submit" value="Submit"></p>
	</form>

VALIDATIONS (errors currently print out in the JS console per lines 87 and 92):	
Valid Phone numbers: 0044-1293-451996
Invalid Phone numbers: 0044-1293
