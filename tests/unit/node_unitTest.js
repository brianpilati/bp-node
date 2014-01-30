'use strict';

console.log("hmmm");


  describe("node", function() {
    console.log("here");
      console.log("here - 2");


    beforeEach(function() {
      console.log("beforeEach");
      console.log("here - dead");
    });

    it("The 'basicServer' should return 'hello world'", function() {


      console.log("there");
      $.get( "http://nodeserver.local.com", function( data ) {
         console.log("here: " + data);
      });

      //$jQuery.get('http://nodeserver.local.com');
      /*expect(primeNumberObject.isPrimeNumber('blah')).toEqual(false);
      expect(primeNumberObject.isPrimeNumber(' ')).toEqual(false);
      expect(primeNumberObject.isPrimeNumber('\t\r')).toEqual(false);
      expect(primeNumberObject.isPrimeNumber('\n\r')).toEqual(false);
      expect(primeNumberObject.isPrimeNumber(-1)).toEqual(false);
      expect(primeNumberObject.isPrimeNumber(7e5)).toEqual(false);
      expect(primeNumberObject.isPrimeNumber(0)).toEqual(false);
      expect(primeNumberObject.isPrimeNumber(1)).toEqual(true);
      */
    });

  });
      function testAjax(callback) {
          var ret=0
            $.ajax({
                  type: "GET",
                      url: "obj.json",
                          contentType: "application/json; charset=utf-8",
                              dataType: "json",
                                  success: function(data){
                                            callback(ret);
                                                },
                                                    error:function(){
                                                             callback(ret);
                                                                 }
                                                                   });
      }

      describe("A jQuery ajax test", function() {
          it("should make AJAX request", function () {
                 testAjax(function(ret){
                           expect(ret).toBe(1);
                                });    
                   });
      });
