import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Facturacion } from 'src/facturacion/facturacion.entity'; // Verifica la ruta según tu proyecto

@Entity()
export class Reserva {

    @PrimaryGeneratedColumn()
    id_reserva: number;

    @Column()
    fecha_reserva: Date;

    @Column()
    fecha_inicio: Date;

    @Column()
    fecha_fin: Date;

    @Column()
    estado: string;

    // Relación con Facturación
    @OneToOne(() => Facturacion, facturacion => facturacion.Reserva)
    @JoinColumn()
    factura: Facturacion;
}
