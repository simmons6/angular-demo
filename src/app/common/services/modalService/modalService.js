angular.module('angulaReminders.common.services.modalService', ['ui.bootstrap'])
    .service('ModalService', function ModalService($modal, $timeout) {
        var createModalInstance = function (templateUrl, controller, resolve) {
            var modalConfiguration = {
                templateUrl: templateUrl,
                controller: controller,
                keyboard: true,
                backdrop: 'static'
            };

            if (resolve) {
                modalConfiguration.resolve = resolve;
            }

            return $modal.open(modalConfiguration);
        };

        this.openModal = function(templateUrl, controller, resolve) {
            return createModalInstance(templateUrl, controller, resolve).result;
        };
    });