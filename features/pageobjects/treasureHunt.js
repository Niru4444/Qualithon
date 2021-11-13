const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TreasureHunt extends Page {
    /**
     * define selectors using getter methods
     */

   
    get doorImage() {
        const link =  $('[href="/intro"]');
        return link;
    }

    get startBtn() {
        const start = $('[id="start"]');
        return start;
    }
    get puzzle2() {
        const vi=$('h2').$('=A Video Player');
        return vi;
   
}
     puzzle1(random) {
             return $(`button[id="c1submitbutton${parseInt(random)}"]`);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickOnImage () {
        await this.doorImage.click();
        await this.startBtn.click();
        for (let i = 1; i <=5 ; i++) {
            if(this.puzzle1(i).existing())
            {
            await this.puzzle1(i).click();
            console.log("value of i................."+i);
            }
            else
            break;
          }
        
      }
    async randomProceed(){

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new TreasureHunt();
