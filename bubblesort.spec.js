describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  
  it('handles a simple array', function(){
    expect( bubbleSort([2,3,1,4])).toEqual([1,2,3,4]);
  });
});