// ==========================================================================
// Project:   Lebowski Framework - The SproutCore Test Automation Framework
// License:   Licensed under MIT license (see License.txt)
// ==========================================================================
/*globals TestApp */

TestApp.alertPanesPage = SC.Page.design({

  alertWarnButton: SC.outlet('mainView.alertPanes.alertWarn'),
  
  alertErrorButton: SC.outlet('mainView.alertPanes.alertError'),
  
  alertInfoButton: SC.outlet('mainView.alertPanes.alertInfo'),
  
  alertPlainButton: SC.outlet('mainView.alertPanes.alertPlain'),
  
  alertExtraButton: SC.outlet('mainView.alertPanes.alertExtraButton'),
  
  alertOneButton: SC.outlet('mainView.alertPanes.alertOneButton'),
  
  statusLabel: SC.outlet('mainView.statusLabel'),

  mainView: SC.View.design({
    layout: { top: 20, bottom: 0, left: 20, right: 20 },
    childViews: 'statusLabel alertPanes'.w(),
    
    statusLabel: SC.LabelView.design({
      layerId: 'alert-panes-status-label',
      layout: {left: 0, top: 0, right: 0, height: 25 },
      textAlign: SC.ALIGN_LEFT,
      valueBinding: SC.Binding.oneWay('TestApp.alertPanesController.status')
    }),
    
    alertPanes: SC.View.design({
      layout: {left: 0, top: 30, left: 0, bottom: 0 },
      childViews: 'alertWarn alertError alertInfo alertPlain alertExtraButton alertOneButton'.w(),
      
      alertWarn: SC.ButtonView.design({
        layerId: 'alert-warn',
        layout: {left: 0, top: 0, width: 200, height: 25 },
        title: 'SC.AlertPane - Warn',
        target: TestApp.alertPanesController,
        action: 'showAlertWarn'
      }),
    
      alertError: SC.ButtonView.design({
        layerId: 'alert-error',
        layout: {left: 0, top: 30, width: 200, height: 25 },
        title: 'SC.AlertPane - Error',
        target: TestApp.alertPanesController,
        action: 'showAlertError'
      }),
    
      alertInfo: SC.ButtonView.design({
        layerId: 'alert-info',
        layout: {left: 0, top: 60, width: 200, height: 25 },
        title: 'SC.AlertPane - Info',
        target: TestApp.alertPanesController,
        action: 'showAlertInfo'
      }),
    
      alertPlain: SC.ButtonView.design({
        layerId: 'alert-plain',
        layout: {left: 0, top: 90, width: 200, height: 25 },
        title: 'SC.AlertPane - Plain',
        target: TestApp.alertPanesController,
        action: 'showAlertPlain'
      }),
    
      alertExtraButton: SC.ButtonView.design({
        layerId: 'alert-extra-button',
        layout: {left: 0, top: 120, width: 200, height: 25 },
        title: 'SC.AlertPane - Extra Button',
        target: TestApp.alertPanesController,
        action: 'showAlertExtraButton'
      }),
    
      alertOneButton: SC.ButtonView.design({
        layerId: 'alert-one-button',
        layout: {left: 0, top: 150, width: 200, height: 25 },
        title: 'SC.AlertPane - One Button',
        target: TestApp.alertPanesController,
        action: 'showAlertOneButton'
      })
    
    })
    
  })

});