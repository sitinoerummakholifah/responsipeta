// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/on","dojo/_base/html","jimu/utils","dijit/a11yclick"],function(c,d,e,a,f){return{a11y_init:function(){e.setAttr(this.domNode,"aria-label",this.nls._widgetLabel);this._LAST_FOCUS_NODE=null;a.initFirstFocusNode(this.domNode,this.showDetailIcon);"mult"===this._SWIPE_MODE?this.multLayersSelector.selector&&(this._LAST_FOCUS_NODE=this.multLayersSelector.selector.dropDownButton._popupStateNode):this._LAST_FOCUS_NODE=this.singleLayersContainer;this.a11y_setFocusUnfold()},a11y_setFocusUnfold:function(){a.initLastFocusNode(this.domNode,
this._LAST_FOCUS_NODE)},a11y_setFocusFold:function(){a.initLastFocusNode(this.domNode,this.showDetailIcon)},a11y_updateFocusNodes:function(b){b&&b.isFouceToFirstNode&&this.showDetailIcon.focus()},a11y_initEvents:function(){this.own(d(this.showDetailIcon,f,c.hitch(this,this._onShowDetailIconClick)))}}});