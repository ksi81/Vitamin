// $(function() {
//     // Multiple images preview in browser
//     var imagesPreview = function(input, placeToInsertImagePreview) {

//         if (input.files) {
//             var filesAmount = input.files.length;

//             for (i = 0; i < filesAmount; i++) {
//                 var reader = new FileReader();

//                 reader.onload = function(event) {
//                     $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
//                 }

// 				reader.readAsDataURL(input.files[i]);

//             }
//         }

//     };

//     $('#gallery-photo-add').on('change', function() {
//         imagesPreview(this, 'div.gallery');
//     });
// });



function handleFileSelectSingle(evt) {
	var file = evt.target.files; // FileList object
	var f = file[0]
	// Only process image files.
	if (!f.type.match('image.*')) {
		alert("Только изображения....");
	}
	var reader = new FileReader();

	// Closure to capture the file information.
	reader.onload = (function (theFile) {
		return function (e) {
			// Render thumbnail.
			var span = document.createElement('div');
			span.innerHTML = ['<div class="mycontainer"><img  id="myImg" class="img-thumbnail image" src="', e.target.result, '" title="', escape(theFile.name), '"/><div class="middle"><div class="text">John Doe</div><div class="text">ВИДАЛИТИ</div><div class="text">РЕДАГУВАТИ</div>  </div></div>'].join('');
			var parentSpan = document.getElementById('output');
			parentSpan.insertBefore(span, parentSpan.firstChild);
		};
	})(f);

	// Read in the image file as a data URL.
	reader.readAsDataURL(f);
}


document.getElementById('file').addEventListener('change', handleFileSelectSingle, false);

function handleFileSelectMulti(evt) {
	var files = evt.target.files; // FileList object
	var parentSpan = document.getElementById('outputMulti');
	for (var i = 0, f; f = files[i]; i++) {
		// Only process image files.
		if (!f.type.match('image.*')) {
			alert("Можна додавати тільки зображення!");
		}
		var reader = new FileReader();
		// Closure to capture the file information.
		reader.onload = (function (theFile) {
			return function (e) {
				// Render thumbnail.
				var span = document.createElement('div');
				span.innerHTML = ['<div class="mycontainer" data-toggle="modal" data-target="#myModal"><img  id="myImg" class="img-thumbnail image"  src="', e.target.result, '" title="', escape(theFile.name), '"/><span style="color: orange;"> <i class=" markitem fas fa-clock fa-2x"></i></span> </div></div>'].join('');
				document.getElementById('outputMulti').insertBefore(span, parentSpan.firstChild);
			};
		})(f);
		// Read in the image file as a data URL.
		reader.readAsDataURL(f);
	}
}
document.getElementById('fileMulti').addEventListener('change', handleFileSelectMulti, false);

// <span style="color: green;"> <i class=" markitem fas fa-smile fa-2x"></i></span>

//<span style="color: red;"> <i class=" markitem fas fa-frown fa-2x"></i></span> 
// <span style="color: orange;"> <i class=" markitem fas fa-clock fa-2x"></i></span> 
