var plauralize = function(word) {
        return word + 's';
    },

    calculateTime = function() {
        var selectors = document.querySelectorAll('[data-words]'),
            timeToReadSelector = document.querySelectorAll('[data-length-to-read]'),
            code = document.getElementsByTagName('pre'),
            wordCount = 0,
            averageWPM = 200,
            secondsInAMin = 60,
            wordPlauralize = 'word',
            minutePlauralize = 'minute',
            secondPlauralize = 'second',
            minutes, seconds, splitText;

        for (var i = 0; i < selectors.length; i++) {
            var text = selectors[i].textContent;

            splitText = text.split(/\s/);

            wordCount += splitText.length;
        }

        for (var y = 0; y < splitText.length; y++) {
            if (splitText[y] === '' || splitText[y] === /\n/) {
                wordCount--;
            }
        }

        for(var z = 0; z < code.length; z++) {
            var ignoreCodeTextLength = code[z].textContent.split(/\s/).length;
            wordCount -= ignoreCodeTextLength;
        }

        if (wordCount !== 1) {
            wordPlauralize = plauralize(wordPlauralize);
        }

        minutes = Math.floor(wordCount / averageWPM);

        if (minutes !== 1) {
            minutePlauralize = plauralize(minutePlauralize);
        }

        seconds = Math.floor(((wordCount % averageWPM) / averageWPM) * secondsInAMin);

        if (seconds !== 1) {
            secondPlauralize = plauralize(secondPlauralize);
        }

        timeToReadSelector[0].textContent = wordCount + ' ' + wordPlauralize + ' • ' + minutes + ' ' + minutePlauralize;

        if (seconds !== 0) {
            timeToReadSelector[0].textContent += ' and ' + seconds + ' ' + secondPlauralize;
        }
    };

calculateTime();
