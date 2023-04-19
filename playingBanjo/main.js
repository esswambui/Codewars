function areYouPlayingBanjo(name) {
    // Implement me
   
    if (name.toLowerCase().startsWith("r")){
      name = name + " plays banjo"
    }else{
      name = name + " does not play banjo"
    }
    
    return name;
  }

  //Better Solution
  function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() === 'r' ? ' plays' : ' does not play') + " banjo";
  }