const funModule = (function() {
  return {
    isCuteMixin(obj) {
      obj.isCute = () => {
        return true;
      };
    },
    singMixin(obj) {
      obj.sing = () => {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

/*
const funModule = {
  isCuteMixin(obj) {
    obj.isCute = function() {
      return true;
    }
  },
  singMixin(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    }
  }
};
*/