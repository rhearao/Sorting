//split testspecs
describe('Split Array function', function() {

  it('is able to split an array', function() {
    let arr = [1,2,3,4,5,6,7,8]
    expect(split(arr)).toEqual([[1], [2], [3],[4], [5],[6], [7],[8]]);
  });

  it('is able to split an odd-length array', function() {
    let arr = [1,2,3,4,7,8,5]
    expect( split(arr) ).toEqual([[1],[2],[3],[4],[7],[8],[5]]);
  });

  it('calls itself recursively', function() {
    spyOn(window, 'split').and.callThrough();
    split([1,2,3,4,5,6,7,8,9,10,11])
    //1st [1,2,3,4,5][6,7,8,9,10,11]
    //2nd [1,2][3,4][5][6,7][8,9][10,11]
    //3rd by itself
    expect(split.calls.count()).toBeGreaterThan(2);
  });

});

//merge testspec
describe('Merge function', function(){
  it('is able to merge an array of single arrays into one sorted array', function(){
    expect(merge([[1],[2],[3],[4],[5],[6],[7],[8]])).toEqual([1,2,3,4,5,6,7,8])
  });

  it('calls itself recursively', function() {
    spyOn(window, 'split').and.callThrough();
    merge([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11]])
    //1st [1,2,3,4,5][6,7,8,9,10,11]
    //2nd [1,2][3,4][5][6,7][8,9][10,11]
    //3rd by itself
    expect(merge.calls.count()).toBeGreaterThan(2);
  });
});
