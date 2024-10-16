"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reserva_service_1 = require("./reserva/reserva.service");
const reserva_controller_1 = require("./reserva/reserva.controller");
const reserva_entity_1 = require("./reserva/reserva.entity");
const facturacion_controller_1 = require("./facturacion/facturacion.controller");
const facturacion_service_1 = require("./facturacion/facturacion.service");
const facturacion_entity_1 = require("./facturacion/facturacion.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '123',
                database: 'gestion_vehiculos',
                entities: [reserva_entity_1.Reserva, facturacion_entity_1.Facturacion],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([reserva_entity_1.Reserva, facturacion_entity_1.Facturacion]),
        ],
        providers: [reserva_service_1.ReservaService, facturacion_service_1.FacturacionService],
        controllers: [reserva_controller_1.ReservaController, facturacion_controller_1.FacturacionController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map