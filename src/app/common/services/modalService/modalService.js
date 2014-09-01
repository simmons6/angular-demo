angular.module('angulaReminders.common.services.modalService', [
    'ui.bootstrap'
]);

function ModalService($modal, $timeout) {
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
        $(document.body).addClass('modal-open');
        var modalInstance = $modal.open(modalConfiguration);

        modalInstance.result.then(function () {
            $(document.body).removeClass('modal-open');
        });

        return modalInstance;
    };

    this.openModal = function(templateUrl, controller, resolve) {
        var modalInstance = createModalInstance(templateUrl, controller, resolve);
        return modalInstance.result;
    };
}

angular.module('angulaReminders.common.services.modalService')
    .service('ModalService', ModalService);