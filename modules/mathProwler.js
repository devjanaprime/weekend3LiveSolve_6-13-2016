var whatOperation = function( checkObject ){
  console.log( 'checking: ' + checkObject.operation );
  switch ( checkObject.operation ) {
    case 'add':
      console.log( 'adding' );
      // add
      var answer = Number( checkObject.x ) + Number( checkObject.y );
      break;
    case 'subtract':
      console.log( 'subtracting' );
      answer = Number( checkObject.x ) - Number( checkObject.y );
      break;
    case 'multiply':
      console.log( 'multipling' );
      answer = Number( checkObject.x ) * Number( checkObject.y );
      break;
    case 'divide':
      console.log( 'dividing' );
      answer = Number( checkObject.x ) / Number( checkObject.y );
      break;
    default:
      answer=0;      
  }
  return( answer );
}

module.exports=whatOperation;
