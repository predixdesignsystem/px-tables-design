/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-tables-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- 0: Import the styles-->
    <style include="px-tables-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-tables-design" description="Predix UI has some useful helpers for common <table> patterns." layer="base" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-colors-design&quot;,
    &quot;https://github.com/PredixDev/px-defaults-design&quot;
  ]" selected-options="{{selectedOptions}}">

<!-- 2: Set Options -->
<px-sass-doc-option slot="options" option-name="Padding" choose-with="dropdown" choices="[
    &quot;small&quot;,
    &quot;regular (default)&quot;,
    &quot;large&quot;
  ]" default-choice="regular (default)">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Widths" choose-with="dropdown" choices="[
    &quot;variable (default)&quot;,
    &quot;fixed&quot;
  ]" default-choice="regular (default)">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Borders" choose-with="dropdown" choices="[
    &quot;rows (default)&quot;,
    &quot;columns&quot;,
    &quot;none&quot;,
    &quot;all&quot;
  ]" default-choice="rows (default)">
</px-sass-doc-option>

<!-- 3: Make HTML Demo -->
<section slot="demo-html">
<table class\$="{{tableClasses}}">
  <tbody>
    <tr>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell wide</td>
      <td>Table cell wide wide</td>
      <td>Table cell wide wide wide</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
{{importCode}}
</section>

<!-- 5: Set Usage HTML -->
<section slot="usage">
\`\`\`
<!-- Default table -->
<table class="table"></table>


<!-- Table Fixed -->
<!-- Table with fixed column widths -->
<table class="table table--fixed"></table>


<!-- Table Small -->
<!-- Table with small padding / tightly packed cells -->
<table class="table table--small"></table>


<!-- Table Large -->
<!-- Table with large padding / widely spaced cells -->
<table class="table table--large"></table>


<!-- Table Columns -->
<!-- Table with no row broders, just column borders -->
<table class="table table--columns"></table>

<!-- Table with Cells -->
<!-- Table with all borders (row & column) -->
<table class="table table--cells"></table>

<!-- Table with No Cells -->
<!-- Table with no borders at all -->
<table class="table table--no-cells"></table>
\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-tables-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated : function(evt) {
    //call functions created below
    this.tableClasses = this._tableClasses();
    this.importCode = this._importCode();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _tableClasses : function() {
    var opts = this.selectedOptions || {}, strings = [];

    if (opts.Padding === "small")    strings.push("table--small");
    if (opts.Padding === "large")    strings.push("table--large");
    if (opts.Widths === "fixed")     strings.push("table--fixed");
    if (opts.Borders === "all")      strings.push("table--cells");
    if (opts.Borders === "columns")  strings.push("table--columns");
    if (opts.Borders === "none")     strings.push("table--no-cells");

    return ("table " + strings.join(" ")).trim();
  },

  _importCode : function() {
    var opts = this.selectedOptions || {}, strings = [];

    if (opts.Padding === "small")    strings.push("$inuit-enable-table--small : true;");
    if (opts.Padding === "large")    strings.push("$inuit-enable-table--large : true;");
    if (opts.Widths === "fixed")     strings.push("$inuit-enable-table--fixed : true;");
    if (opts.Borders === "all")      strings.push("$inuit-enable-table--cells : true;");
    if (opts.Borders === "columns")  strings.push("$inuit-enable-table--columns : true;");
    if (opts.Borders === "none")     strings.push("$inuit-enable-table--no-cells : true;");

    return (strings.join("\n") + "\n@import 'px-tables-design/_base.tables.scss';").trim();
  }
});
