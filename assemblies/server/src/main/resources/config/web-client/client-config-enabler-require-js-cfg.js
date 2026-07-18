/*! ******************************************************************************
 *
 * Pentaho
 *
 * Copyright (C) 2024 - 2026 by Pentaho Canada Inc. : http://www.pentaho.com
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file.
 *
 * Change Date: 2030-06-15
 ******************************************************************************/


(function() {
  /* globals requireCfg, CONTEXT_PATH */
  /* eslint dot-notation: 0, require-jsdoc: 0 */

  var requireModules = requireCfg.config["pentaho/modules"] || (requireCfg.config["pentaho/modules"] = {});

  requireCfg.paths["@pentaho/config-deploy/pentaho/config/deploy"] = CONTEXT_PATH + "content/config/deploy";
  requireModules["@pentaho/config-deploy/pentaho/config/deploy/config"] = {type: "pentaho/config/spec/IRuleSet"};

})();
