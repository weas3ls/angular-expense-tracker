import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
    transform(value: string, limit = 29, completeWords = true) {
        if (completeWords) limit = value.substring(0, limit).lastIndexOf(' ');

        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
}
