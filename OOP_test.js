function NoteApplication(author){
	this.author = author;
	var notes=[];
	
	this.create = function(note_content)
	{
		notes.push(note_content);
		console.log(notes);
	};
	this.listNotes = function(){
		
		for(var id = 0; id < notes.lenghth; id++ ){
			console.log("Note ID: "+ id);
			console.log(notes[id]);
			console.log("By Author:"+ author);
			
		}
	};
	this.get = funtion(note_id){
		return notes[note_id];
	}
	this.search = function(search_text){
		if(typeof search_text == "string"){
				document.write("Showing results for search \"" + search_text + "\"<br><br>");
				//loop through all the notes and check if they contain the search text
				for(i = 0; i < notes.length; i++){
					if ( notes[i].search(search_text)){
						//if the note contains the search text, display the note
						document.write(notes[i] + "<br>");
					}
				}
			
			}
	};

}

