// ==========================================================================
// Project:   Lebowski Framework - The SproutCore Test Automation Framework
// License:   Licensed under MIT license (see License.txt)
// ==========================================================================
/*globals TestApp Core */

TestApp.radioControlsController = SC.Object.create({
  
  reset: function() {
    var page = TestApp.get('radioViewsPage');
    page.setPath('horizontalRadioView.value', null);
    page.setPath('verticalRadioView.value', 'cat');
    page.setPath('mixedStateRadioView.value', [1]);
  }
  
});