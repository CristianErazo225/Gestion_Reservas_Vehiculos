import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Reserva } from 'src/reserva/reserva.entity'; // Verifica la ruta según tu proyecto

@Entity()
export class Facturacion {

    @PrimaryGeneratedColumn()
    FacturaID: number; 

    @Column()
    FechaEmision: Date; 

    @Column() 
    MontoTotal: number;
    

    // Relación con Reserva
    @OneToOne(() => Reserva, reserva => reserva.factura, { onDelete: 'CASCADE' })
    Reserva: Reserva;
}
