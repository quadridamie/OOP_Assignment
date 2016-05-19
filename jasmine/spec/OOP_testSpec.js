describe("NoteApp Library", function(){
	describe("create", function(){
		it("Adds a note to the list", function(){
			expect(create("Hello")).toBe(true);
			expect(create(7)).toBe(false);
		});

	});
	describe("listNotes", function(){
		it("returns all the notes in the list", function(){

		});

	});
	describe("Fetch notes", function(){
		it("gets the note with an index", function(){
			expect(get(0)).toBe(typeof "string");
		});
	});
});