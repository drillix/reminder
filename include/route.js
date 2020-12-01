$('.frm_addroom').submit(function(e){
	e.preventDefault();
	var a = $('input[name="room_name"]');
	//window.alert(a);
	$.ajax({
		type: "POST",
		url: "../class/add/add",
		data: {
			name: a.val(),
			key: 'add_room'
		}
      })
      
	.done(function(data){
		a.val('');
		if(data == 1){
			toastr.success("Room added.");
			table_room.ajax.reload(null,false);
			$('.cancel_room').click();
		}
		else if(data == 2){
			toastr.warning("Room already exist");

		}else if(data == 0){
			toastr.error("Failed to add room");
			$('.cancel_room').click();

		}
	})
	.fail(function(data){
		console.log(data);
	});

});





var table_user =  $('.table_user').DataTable({
      "ajax":
      {
            "url": "../class/display/display",
            "type": "POST",
            "data": {
                  "key": "display_user"
            }
      },
      "columns": 
      [
            {
                  "data": [0],
                  "className": "text-center"
            },
            {
                  "data": [1],
                  "className": "text-center"
            },
            {
                  "data": [2],
                  "className": "text-center"
            },
            {
                  "data": [3],
                  "className": "text-center"
            },
            {
                  "data": [4],
                  "className": "text-center",
                  "visible": false
            },
            {
                  "data": [5],
                  "className": "text-center",
                  "visible": false
            }
      ],
      dom: "Bfrtip",
      buttons: [
            {
                  extend: "copy",
                  className: "btn-sm btn-success",
                  exportOptions:{
                        columns: [0,1,2]
                  }
            },
            {
                  extend: "csv",
                  className: "btn-sm btn-success",
                  exportOptions:{
                        columns: [0,1,2]
                  }
            },
            {
                  extend: "excel",
                  className: "btn-sm btn-success",
                  exportOptions:{
                        columns: [0,1,2]
                  }
            },
            {
                  extend: "pdfHtml5",
                  className: "btn-sm btn-success",
                  exportOptions:{
                        columns: [0,1,2]
                  }
            },
            {
                  extend: "print",
                  className: "btn-sm btn-success",
                  exportOptions:{
                        columns: [0,1,2]
                  },
          message: '<img src="logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">GHANA TECHNOLOGY UNIVERSITY COLLEGE</h4>\
                                    <h5>FACULTY OF INFORMATICS</h5>\
                                    <h6>TESSANO CAMPUS</h6>\
                                    </center>',
                  customize: function ( win ) {
                        $(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
                  }
            }
      ]
});	
