nction NoteApplication(author){
	this.author = author;
	this.notes=[];
	
	NoteApplication.prototype.create = function(note_content)
	{
		notes.push(note_content);
		console.log(notes);
	};
	NoteApplication.prototype.listNotes = function(){
		
		for(var id = 0; id < notes.lenghth; id++ ){
			console.log("Note ID: "+ id);
			console.log(notes[id]);
			console.log("By Author:"+ author);
			
		}
	};
	NoteApplication.prototype.get = funtion(note_id){
		return notes[note_id];
	}
}

var test = new NoteApplication('joe');
test.create('note 1');