function Rectangle(width, height) {
    var w = Number(width),
        h = Number(height);

    this.area = function() {
          return roundFractional(w * h, 2);
            
    };

    this.perimeter = function() {
          return roundFractional(2 * (w + h), 2);
            
    };

    function roundFractional(x, n) {
          return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
            
    }

}

function validate(data) {
  var result = {
        isOK: false,
        reason: ''
                
  };

  if(data === '') {
        result.reason = '不能为空！';
        return result;
              
  }

  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data)) {
        result.reason = '必须是数值';
        return result;
              
  }

  if(Number(data) < 0) {
        result.reason = '必须大于零';
        return result;
              
  }

    result.isOK = true;
    return result;

}

function isLegalKey(key, content, pos) {
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(key)) {
        return false;    
}

if(key === '.') {
      if(pos === 0 || content.indexOf('.') !== -1) return false;

      if(pos === 1 && content.substring(0,1) === '-') return false;
            
}

if(key === 'e') {
      if(pos === 0 || content.indexOf('e') !== -1 
                  || content.indexOf('E') !== -1) return false;

      if(pos === 1 && content.substring(0,1) === '-') return false;
            
}

if(key === 'E') {
      if(pos === 0 || content.indexOf('e') !== -1 
                  || content.indexOf('E') !== -1) return false;

      if(pos === 1 && content.substring(0,1) === '-') return false;
            
}

  return true;
  }')"']`])
}
