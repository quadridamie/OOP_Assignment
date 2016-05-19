function NoteApplication(author){
	this.author = author;
	var notes=[];
	
	this.create = function(note_content)
	{
		if (typeof note_content ==="string"){
			notes.push(note_content);
			console.log(notes);
			return true;
		}
		else{
			return false;
		} 
		
	};
	this.listNotes = function(){
		var note
		for(var id = 0; id < notes.lenghth; id++ ){
			console.log("Note ID: "+ id);
			console.log(notes[id]);
			console.log("By Author:"+ author);
			
		}
	};
	this.get = function(note_id){
		return notes[note_id];
	}
	this.search = function(search_text){
		if(typeof search_text == "string"){
				console.log("Showing results for search \"" + search_text + "\"<br><br>");
				//loop through all the notes and check if they contain the search text
				for(i = 0; i < notes.length; i++){
					if ( notes[i].search(search_text)){
						//if the note contains the search text, display the note
						return notes[i];
					}
				}
			
			}
	};

	this.delete = function(note_id){
			
			//confirm that the argument entered is a number and that it is within range
			if(typeof note_id == "number" && note_id < notes.length){
				console.log("Deleting note " + note_id);
				//delete notes[note_id];
				notes.splice(note_id,1)	
				return note_id + " Deleted";
			}
		};

		//the edit method requires two arguments: id and note content.
		//the id is used to locate the note while the new note content will be used to replace the old one.
		this.edit = function(note_id, note_content){

			//check that the id is really a number and that it is not out of range
			//also check that the content is actually a string
			if(typeof note_id == "number" && typeof note_content == "string" && note_id < notes.length){
				notes[note_id] = note_content;
				console.log("Note " + note_id + " updated");
			}
			else{
				return "Failed";
			}
		};
}

