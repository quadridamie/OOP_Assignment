describe("NoteApp", function(){
	it("should create a note", function(){
		expect(create("String")).toBe(true);
		expect(create(5)).toBe(false);
	});

	describe("get a specific note", function(){
		it("should get a specific note by note_id", function(){
			expect(get(0)).toBe(typeof "string");
			expect(get("string")).toBe(null);
		});
	});
	describe("search a text", function(){
		it("should return serched text", function(){
			expect(search("string")).toBe(typeof "string");
			expect(search(1)).toBe(null);
		});
	});
	describe("delete a note", function(){
		it("should delete a note", function(){
			expect(delete(1)).toBe(true);
		});
	});
});

	
