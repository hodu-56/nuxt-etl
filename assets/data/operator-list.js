export const operatorList = {
    "DataSource": [
        {
            "operatorName": "CSV.string",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "csvOperator.csvString"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "csv_string": {
                    "type": "textarea",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "CSV.uploadFile",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "csvOperator.loadCsvFile"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "file_name": {
                    "type": "file",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "JSON.string",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "jsonOperator.jsonString"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "json_string": {
                    "type": "textarea",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "JSON.uploadFile",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "jsonOperator.loadJsonFile"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "file_name": {
                    "type": "file",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "REST",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "restOperator.{METHOD}"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false
                },
                "method": {
                    "type": "select",
                    "hidden": false,
                    "options": {
                        "type": "string",
                        "data": ['get', 'post', 'put', 'delete']
                    }
                },
                "url": {
                    "type": "string",
                    "hidden": false
                },
                "headers": {
                    "type": "string",
                    "hidden": false
                },
                "data": {
                    "type": "textarea",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "ElasticSearch",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "elasticsearchOperator.es_search"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "es_conn_id": {
                    "type": "select",
                    "hidden": false,
                    "options": {
                        "type": "url",
                        "connection_type": "elasticsearch",
                        "method": "GET",
                        "data": "/connections"
                    }
                },
                "index": {
                    "type": "string",
                    "hidden": false
                },
                "query": {
                    "type": "textarea",
                    "hidden": false
                },
            }
        },
        {
            "operatorName": "Kaggle.search",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "kaggleOperator.search"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "query": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "Kaggle.download",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "kaggleOperator.download"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "dataset_list": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "publicOperator.public",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "publicOperator.public"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "data": {
                    "type": "textarea",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "publicOperator.culture",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "publicOperator.culture"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "data": {
                    "type": "textarea",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "publicOperator.uci",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "publicOperator.uci"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "publicOperator.cats",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "publicOperator.cats"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "count": {
                    "type": "string",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "publicOperator.tour",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "publicOperator.tour"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "data": {
                    "type": "textarea",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "publicOperator.learning_path",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "publicOperator.learning_path_index"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "publicOperator.fire",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "publicOperator.fire"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "publicOperator.health",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "publicOperator.health"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "data": {
                    "type": "textarea",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "publicOperator.text",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "publicOperator.text"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "publicOperator.iris",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "publicOperator.iris"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "data": {
                    "type": "textarea",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "s3Operator.download_from_s3",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "s3Operator.download_from_s3"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "aws_conn_id": {
                    "type": "select",
                    "hidden": false,
                    "options": {
                        "type": "url",
                        "connection_type": "aws",
                        "method": "GET",
                        "data": "/connections"
                    }
                },
                "bucket_name": {
                    "type": "string",
                    "hidden": false
                },
                "key": {
                    "type": "string",
                    "hidden": false
                },
                "region_name": {
                    "type": "string",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "split_into_sents",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "taOperator.split_into_sents"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "x_token": {
                    "type": "textarea",
                    "hidden": false
                },
                "data": {
                    "type": "textarea",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "keyword_keybert_airflow",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "taOperator.keyword_keybert_airflow"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "x_token": {
                    "type": "textarea",
                    "hidden": false
                },
                "data": {
                    "type": "textarea",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "related_keybert_tea",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "taOperator.related_keybert_tea"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "x_token": {
                    "type": "textarea",
                    "hidden": false
                },
                "data": {
                    "type": "textarea",
                    "hidden": false
                }
            }
        }
    ],
    "Transform": [
        {
            "operatorName": "Mapping",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "mappingOperator.columnMapping"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "map_fields": {
                    "type": "textarea",
                    "value": ""
                }
            }
        },
        {
            "operatorName": "Filter",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "filterOperator.filterOp"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "columns": {
                    "type": "string",
                    "hidden": false,
                    "inputValue": "",
                    "value": []
                }
            }
        },
        {
            "operatorName": "DataClassification",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "dataClassificationOperator.search"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "data_type": {
                    "type": "select",
                    "hidden": false,
                    "options": {
                        "type": "string",
                        "data": ["video", "audio", "image", "text", "json", "csv", "xml", "yaml"]
                    },
                    "value": ""
                },
                "target_path": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "ObjectDetection.detection",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "objectExtractOperator.detection"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "data": {
                    "type": "textarea",
                    "value": ""
                }
            }
        },
        {
            "operatorName": "ObjectExtract.image-captioning",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "objectExtractOperator.image_captioning "
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "data": {
                    "type": "textarea",
                    "value": ""
                }
            }
        },
        {
            "operatorName": "ObjectExtract.speech-to-text",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "objectExtractOperator.stt"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "data": {
                    "type": "textarea",
                    "value": ""
                }
            }
        },
        {
            "operatorName": "parserOperator.parse",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "parserOperator.parse"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "target_data": {
                    "type": "textarea",
                    "value": ""
                },
                "format": {
                    "type": "textarea",
                    "value": ""
                }
            }
        },
        {
            "operatorName": "parserOperator.parse_list",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "parserOperator.parse_list"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "target_data": {
                    "type": "textarea",
                    "value": ""
                },
                "format": {
                    "type": "textarea",
                    "value": ""
                }
            }
        },
        {
            "operatorName": "csvOperator.csvToJson",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "csvOperator.csvToJson"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "jsonOperator.jsonToCsv",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "jsonOperator.jsonToCsv"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        }
    ],
    "DataTarget": [
        {
            "operatorName": "CSV",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "csvOperator.saveCsvFile"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "JSON",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "jsonOperator.saveJsonFile"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        },
        {
            "operatorName": "ElasticSearch",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "elasticsearchOperator.es_save"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "es_conn_id": {
                    "type": "select",
                    "hidden": false,
                    "options": {
                        "type": "url",
                        "connection_type": "elasticsearch",
                        "method": "GET",
                        "data": "/connections"
                    }
                },
                "index": {
                    "type": "string",
                    "hidden": false
                },
                "data": {
                    "type": "textarea",
                    "hidden": false
                },
            }
        },
        {
            "operatorName": "Minio.uploadInChromaPath",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "minioOperator.upload_in_chroma_path"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "bucket_name": {
                    "type": "string",
                    "hidden": false
                },
                "data": {
                    "type": "textarea",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "Minio.upload",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "minioOperator.upload"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "bucket_name": {
                    "type": "string",
                    "hidden": false
                },
                "prefix": {
                    "type": "string",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "s3Operator.load_file",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "s3Operator.load_file"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                },
                "aws_conn_id": {
                    "type": "select",
                    "hidden": false,
                    "options": {
                        "type": "url",
                        "connection_type": "aws",
                        "method": "GET",
                        "data": "/connections"
                    }
                },
                "bucket_name": {
                    "type": "string",
                    "hidden": false
                },
                "key": {
                    "type": "string",
                    "hidden": false
                },
                "region_name": {
                    "type": "string",
                    "hidden": false
                }
            }
        },
        {
            "operatorName": "print_duration",
            "attributes": {
                "operator_type": {
                    "type": "string",
                    "hidden": true,
                    "value": "s3Operator.print_duration"
                },
                "task_id": {
                    "type": "string",
                    "hidden": false,
                    "value": ""
                }
            }
        }
    ]
};
