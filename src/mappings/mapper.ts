import { createMapper, createMap, forMember, mapFrom, preCondition, typeConverter, convertUsing, fromValue } from '@automapper/core';
import { classes } from '@automapper/classes';
import { Demo, Output, Record } from '../classes/classes';

// Create and export the mapper
export const mapper = createMapper({
    strategyInitializer: classes(),
});


createMap(
    mapper,
    Record,
    Output,
    forMember(
        (d) => d.spam,
        preCondition((s) => s.ses.receipt.spamVerdict.status == "PASS", 'N/A'),
        mapFrom((s) =>"true")
    ),
    forMember(
        (d) => d.virus,
        preCondition((s) => s.ses.receipt.virusVerdict.status == "PASS", 'N/A'),
        mapFrom((s) => "true")
    ),
    forMember(
        (d) => d.dns,
        preCondition((s) => s.ses.receipt.spfVerdict.status == "PASS" && s.ses.receipt.dkimVerdict.status == "PASS" && s.ses.receipt.dmarcVerdict.status == "PASS", 'N/A'),
        mapFrom((s) => "true")
    ),
    forMember(
        (d) => d.mes,
        mapFrom((s) => new Date(s.ses.mail.timestamp).toLocaleString('es-ES', { month: 'long' }) )
    ),
    forMember(
        (d) => d.retrasado,
        preCondition((s) => s.ses.receipt.processingTimeMillis > 100, 'N/A'),
        mapFrom((s) => "true")
    ),
    forMember(
        (d) => d.emisor,
        mapFrom((s) => s.ses.mail.source.substring(0, s.ses.mail.source.lastIndexOf("@")) )
    ),
    forMember(
        (d) => d.receptor,
        mapFrom((s) => s.ses.mail.destination.map(e=>e.substring(0, e.lastIndexOf("@")) ))
    ),
);