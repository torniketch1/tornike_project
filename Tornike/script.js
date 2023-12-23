function displayProsAndCons() {
    
    var selectedSign = document.getElementById('zodiacSelect').value;

    
    var pros = "";
    var cons = "";

    switch (selectedSign) {
      case 'aries':
        pros = "Energetic, caring, brave";
        cons = "Impulsive, impatient, short-tempered";
        break;
      case 'taurus':
        pros = "Patient, reliable, determined";
        cons = "Stubborn, possessive, uncompromising";
        break;
      case 'gemini':
        pros = "Adaptable, Versatile, Sociable";
        cons = "Adaptable, Versatile, Sociable";
        break;
      case 'cancer':
        pros = "Nurturing, Empathetic, Protective";
        cons = "Overemotional, Moody, Clingy";
        break;
      case 'leo':
        pros = "Charismatic, Confident, Generous";
        cons = "Arrogant, Self-Centered, Stubborn";
        break;
      case 'virgo':
        pros = "Detail-Oriented, Analytical, Reliable";
        cons = "Overcritical, Worrisome, Perfectionist";
        break;
        case 'libra':
            pros = "Diplomatic, Charming, Fair";
            cons = "Indecisive, Avoids Confrontation, Superficial";
            break;
            case 'scorpio':
            pros = "Passionate, Intuitive, Determined";
            cons = "Jealous, Secretive, Intense";
            break;
            case 'sagittarius':
            pros = "Optimistic, Adventurous, Open-Minded";
            cons = "Impulsive, Tactless, Restless";
            break;
            case 'capricorn':
            pros = "Ambitious, Disciplined, Responsible";
            cons = "Pessimistic, Stubborn, Overly Serious";
            break;        
            case 'aquarius':
            pros = "Innovative, Independent, Humanitarian";
            cons = "Detached, Stubborn, Eccentric";
            break;
            case 'pisces':
          pros = "Compassionate, Artistic, Intuitive";
          cons = "Overly Sensitive, Indecisive, Escapist";
    }

    document.getElementById('pros').innerText = "Pros: " + pros;
    document.getElementById('cons').innerText = "Cons: " + cons;
  }