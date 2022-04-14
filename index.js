class SortedList {
  constructor() {
       this.items= [],
       this.length = 0
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>(a-b))
    this.length++;
  }
  get(pos) {
    if(this.items.indexOf(pos) == -1){
      throw new Error('OutOfBounds')
    }
    else{
      return(this.items.indexOf(pos))
    }
  }
  max()  {
    if (this.items.length > 0) {
      return Math.max(...this.items)
    }else{
      throw new Error('EmptySortedList')
    }
  }
  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items)
    }else{
      throw new Error('EmptySortedList')
    }
  }
  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }else{
      return this.sum() / this.items.length
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    }else{
      return this.items.reduce((a,b)=> a + b)
    }
  }
  };
  
  module.exports = SortedList;