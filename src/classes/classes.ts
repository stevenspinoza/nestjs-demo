import { AutoMap } from "@automapper/classes"

export class Demo {
    text: string
}

export class Output {
    spam: string
    virus: string
    dns: string
    mes: string
    retrasado: string
    emisor: string
    receptor: Array<string>
}
  

export class  Record {
    eventVersion: string
    @AutoMap()
    ses: {
      receipt: {
        timestamp: string
        processingTimeMillis: number
        recipients: Array<string>
        spamVerdict: {
          status: string
        }
        virusVerdict: {
          status: string
        }
        spfVerdict: {
          status: string
        }
        dkimVerdict: {
          status: string
        }
        dmarcVerdict: {
          status: string
        }
        dmarcPolicy: string
        action: {
          type: string
          topicArn: string
        }
      }
      mail: {
        timestamp: string
        source: string
        messageId: string
        destination: Array<string>
        headersTruncated: boolean
        headers: Array<{
          name: string
          value: string
        }>
        commonHeaders: {
          returnPath: string
          from: Array<string>
          date: string
          to: Array<string>
          messageId: string
          subject: string
        }
      }
    }
    eventSource: string
}


