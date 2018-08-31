/**
 * Display settings panels for eqLogic
 * @param {object} _eqLogic
 */
function displaySettingsPanels(_eqLogic) {
    var el = $('#settingsPanels');
    el.empty();
    switch (_eqLogic.configuration.eqType) {
        case 'externalConditions':
            var div = '<div id="objectSettings" class="panel-group">';
            div += '<div class="panel panel-default">';
            div += '<div class="panel-heading">';
            div += '<h4 class="panel-title">{{Conditions externes}}</h4>';
            div += '</div>';
            div += '<div class="panel-body">';
            div += '<form class="form-horizontal">';
            div += '<div class="col-sm-6">'; 
            div += '<div class="form-group">';
            div += '<div class="col-sm-3">';
            div += '<h5 class="text-center"><span class="label label-default">{{Conditions primaires}}</span></h5>';  
            div += '</div>';
            div += '<div class="col-sm-5">';
            div += '<h5 class="text-center"><span class="label label-default">{{Commande d\'information}}</span></h5>';  
            div += '</div>';
            div += '<div class="col-sm-4">';
            div += '<h5 class="text-center"><span class="label label-default">{{Statut}}</span></h5>';
            div += '</div>';
            div += '</div>';
            div += '<div class="form-group">';
            div += '<label class="col-sm-3 control-label">{{Détection incendie}}</label>';
            div += '<div class="col-sm-5">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-inputid="fireCondition">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input id="fireCondition" type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="fireCondition" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd" data-type="info" data-inputid="fireCondition">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-4">';
            div += '<div id="fireConditionStatus" class="input-group">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="fireConditionStatus" placeholder="{{Valider le statut}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default getCmdStatus cursor" data-inputid="fireConditionStatus" data-cmdinputid="fireCondition">';
            div += '<span class="fa fa-check-circle"></span>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            div += '<div class="form-group">';
            div += '<label class="col-sm-3 control-label">{{Absence}}</label>';
            div += '<div class="col-sm-5">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-inputid="absenceCondition">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input id="absenceCondition" type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="absenceCondition" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd cursor" data-type="info" data-inputid="absenceCondition">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-4">';
            div += '<div id="absenceConditionStatus" class="input-group">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="absenceConditionStatus" placeholder="{{Valider le statut}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default getCmdStatus cursor" data-inputid="absenceConditionStatus" data-cmdinputid="absenceCondition">';
            div += '<span class="fa fa-check-circle"></span>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-6">';
            div += '<div class="form-group">';
            div += '<div class="col-sm-3">';
            div += '<h5 class="text-center"><span class="label label-default">{{Conditions secondaires}}</span></h5>';  
            div += '</div>';
            div += '<div class="col-sm-5">';
            div += '<h5 class="text-center"><span class="label label-default">{{Commande d\'information}}</span></h5>';  
            div += '</div>';
            div += '<div class="col-sm-3">';
            div += '<h5 class="text-center"><span class="label label-default">{{Statut}}</span></h5>';
            div += '</div>';
            div += '</div>';
            div += '<div class="form-group">';
            div += '<label class="col-sm-3 control-label">{{Présence}}</label>';
            div += '<div class="col-sm-5">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-inputid="presenceCondition">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input id="presenceCondition" type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="presenceCondition" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd cursor" data-type="info" data-inputid="presenceCondition">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-4">';
            div += '<div id="presenceConditionStatus" class="input-group">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="presenceConditionStatus" placeholder="{{Valider le statut}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default getCmdStatus cursor" data-inputid="presenceConditionStatus" data-cmdinputid="presenceCondition">';
            div += '<span class="fa fa-check-circle"></span>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            div += '<div class="form-group">';
            div += '<div class="col-sm-3">';
            div += '<h5 class="text-center"><span class="label label-default">{{Conditions secondaires}}</span></h5>';  
            div += '</div>';
            div += '<div class="col-sm-5">';
            div += '<h5 class="text-center"><span class="label label-default">{{Commande d\'information}}</span></h5>';  
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<h5 class="text-center"><span class="label label-default">{{Seuil}}</span></h5>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<h5 class="text-center"><span class="label label-default">{{Hystérésis}}</span></h5>';
            div += '</div>';
            div += '</div>';
            div += '<div class="form-group">';
            div += '<label class="col-sm-3 control-label">{{Luminosité extérieure}}</label>';
            div += '<div class="col-sm-5">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-inputid="outdoorLuminosityCondition">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input id="outdoorLuminosityCondition" type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="outdoorLuminosityCondition" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd cursor" data-type="info" data-inputid="outdoorLuminosityCondition">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<input id="outdoorLuminosityThreshold" type="number" min="0" value="0" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="outdoorLuminosityThreshold"/>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<input id="outdoorLuminosityHysteresis" type="number" min="0" value="0" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="outdoorLuminosityHysteresis"/>';
            div += '</div>';
            div += '</div>';
            div += '<div class="form-group">';
            div += '<label class="col-sm-3 control-label">{{Température extérieure}}</label>';
            div += '<div class="col-sm-5">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-inputid="outdoorTemperatureCondition">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input id="outdoorTemperatureCondition" type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="outdoorTemperatureCondition" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd cursor" data-type="info" data-inputid="outdoorTemperatureCondition">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<input id="outdoorTemperatureThreshold" type="number" min="-20" max="20" value="0" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="outdoorTemperatureThreshold"/>';
            div += '</div>';
            div += '<div class="col-sm-2">';
            div += '<input id="outdoorTemperatureHysteresis" type="number" min="1" max="5" value="0" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="outdoorTemperatureHysteresis"/>';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            div += '</form>';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            div += '<div class="panel panel-default">';
            div += '<div class="panel-heading">';
            div += '<h4 class="panel-title">{{Conditions externes utilisateurs}}</h4>';
            div += '</div>';
            div += '<div class="panel-body">';
            div += '<form class="form-horizontal">';
            div += '<div class="col-sm-6">'; 
            div += '<div class="form-group">';
            div += '<div class="col-sm-3">';
            div += '<h5 class="text-center"><span class="label label-default">{{Conditions primaires}}</span></h5>';  
            div += '</div>';
            div += '<div class="col-sm-5">';
            div += '<h5 class="text-center"><span class="label label-default">{{Commande d\'information}}</span></h5>';  
            div += '</div>';
            div += '<div class="col-sm-4">';
            div += '<h5 class="text-center"><span class="label label-default">{{Statut}}</span></h5>';
            div += '</div>';
            div += '</div>';
            div += '<div class="form-group">';
            div += '<label class="col-sm-3 control-label">{{Condition 1}}</label>';
            div += '<div class="col-sm-5">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-inputid="firstUserCondition">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input id="firstUserCondition" type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="firstUserCondition" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd cursor" data-type="info" data-inputid="firstUserCondition">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-4">';
            div += '<div id="firstUserConditionStatus" class="input-group">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="firstUserConditionStatus" placeholder="{{Valider le statut}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default getCmdStatus cursor" data-inputid="firstUserConditionStatus" data-cmdinputid="firstUserCondition">';
            div += '<span class="fa fa-check-circle"></span>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            div += '<div class="form-group">';
            div += '<label class="col-sm-3 control-label">{{Condition 2}}</label>';
            div += '<div class="col-sm-5">';
            div += '<div class="input-group">';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default delCmd cursor" data-inputid="secondUserCondition">';
            div += '<i class="fa fa-minus-circle"></i>';
            div += '</a>';
            div += '</span>';
            div += '<input id="secondUserCondition" type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="secondUserCondition" placeholder="{{Sélectionner une commande}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default listCmd cursor" data-type="info" data-inputid="secondUserCondition">';
            div += '<i class="fa fa-list"></i>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-4">';
            div += '<div id="secondUserConditionStatus" class="input-group">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="secondUserConditionStatus" placeholder="{{Valider le statut}}" disabled/>';
            div += '<span class="input-group-btn">';
            div += '<a class="btn btn-default getCmdStatus cursor" data-inputid="secondUserConditionStatus" data-cmdinputid="secondUserCondition">';
            div += '<span class="fa fa-check-circle"></span>';
            div += '</a>';
            div += '</span>';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            div += '<div class="col-sm-6">'; 
            div += '<div class="form-group">';
            div += '<div class="col-sm-3">';
            div += '<h5 class="text-center"><span class="label label-default">{{Action}}</span></h5>';  
            div += '</div>';
            div += '<div class="col-sm-3">';
            div += '<h5 class="text-center"><span class="label label-default">{{Nom de la condition}}</span></h5>';
            div += '</div>';
            div += '</div>';
            div += '<div class="form-group">';
            div += '<div class="col-sm-3">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="firstUserConditionAction">';
            div += '<option value="closeShutter">{{Fermer les volets}}</option>';
            div += '<option value="openShutter">{{Ouvrir les volets}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-3">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="firstUserConditionName" value="Condition 1" placeholder="{{Nom de la condition}}"/>';
            div += '</div>';
            div += '</div>';
            div += '<div class="form-group">';
            div += '<div class="col-sm-3">';
            div += '<select type="text" class="eqLogicAttr form-control cursor" data-l1key="configuration" data-l2key="secondUserConditionAction">';
            div += '<option value="closeShutter">{{Fermer les volets}}</option>';
            div += '<option value="openShutter">{{Ouvrir les volets}}</option>';
            div += '</select>';
            div += '</div>';
            div += '<div class="col-sm-3">';
            div += '<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="secondUserConditionName" value="Condition 2" placeholder="{{Nom de la condition}}"/>';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            div += '</form>';
            div += '</div>';
            div += '</div>';
            div += '<div class="panel panel-default">';
            div += '<div class="panel-heading">';
            div += '<h4 class="panel-title">{{Priorité conditions primaires}}</h4>';
            div += '</div>';
            div += '<div class="panel-body">';
            div += '<form class="form-horizontal">';
            div += '<input type="text" class="eqLogicAttr form-control display-none" data-l1key="configuration"  data-l2key="primaryConditionsPriority"/>';
            div += '<div class="form-group">';
            div += '<label class="col-sm-2 control-label">{{Priorité conditions primaires}}</label>';
            div += '<div class="col-sm-6 conditionsList">';
            div += '<ul id="primaryConditionsList" class="list-inline sortable-list">';
            div += '<li class="text-center" data-name=""><i class="cursor fa fa-arrows"></i> </li>';
            div += '<li class="text-center" data-name=""><i class="cursor fa fa-arrows"></i> </li>';
            div += '<li class="text-center" data-name=""><i class="cursor fa fa-arrows"></i> </li>';
            div += '<li class="text-center" data-name=""><i class="cursor fa fa-arrows"></i> </li>';
            div += '</ul>';
            div += '</div>';
            div += '</div>';
            div += '</form>';
            div += '</div>';
            div += '</div>';
            div += '</div>';

            el.append(div);
            break;
    
        default:
            break;
    }
}

